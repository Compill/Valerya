const { execSync } = require('child_process');
const { exit } = require("process");
const fs = require('fs');
const path = require('path');

if (process.argv.length < 3)
{
  console.log("You forgot to passs the name of the lib as argument")
  exit(0)
}

for (let i = 0; i < process.argv.length; i++)
{
  if (process.argv[i + 2])
    deploy(process.argv[i+2])
}

function fixPeerDependencies(lib)
{
  console.log("Fixing peer dependencies in dist folder...");

  const distPackageJsonPath = path.join('dist', 'libs', lib, 'package.json');

  if (!fs.existsSync(distPackageJsonPath))
  {
    console.log(`Warning: Could not find ${distPackageJsonPath}`);
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(distPackageJsonPath, 'utf8'));

  let modified = false;

  // Fix peerDependencies
  if (packageJson.peerDependencies)
  {
    Object.keys(packageJson.peerDependencies).forEach(dep =>
    {
      const version = packageJson.peerDependencies[ dep ];

      // If it's an internal dependency (starts with @valerya/ or @compill/)
      // and doesn't have a caret, add it
      if (dep.startsWith('@valerya/') && !version.startsWith('^') && !version.startsWith('~'))
      {
        packageJson.peerDependencies[ dep ] = `^${version}`;
        console.log(`  Fixed ${dep}: ${version} -> ^${version}`);
        modified = true;
      }
    });
  }

  // Fix dependencies (optional, if needed)
  if (packageJson.dependencies)
  {
    Object.keys(packageJson.dependencies).forEach(dep =>
    {
      const version = packageJson.dependencies[ dep ];

      if (dep.startsWith('@valerya/') && !version.startsWith('^') && !version.startsWith('~'))
      {
        packageJson.dependencies[ dep ] = `^${version}`;
        console.log(`  Fixed ${dep}: ${version} -> ^${version}`);
        modified = true;
      }
    });
  }

  if (modified)
  {
    fs.writeFileSync(distPackageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log("Peer dependencies fixed!");
  } else
  {
    console.log("No peer dependencies to fix.");
  }
}

console.log("[DEPLOY] Finished deploy process")

function deploy(lib)
{
  console.log(`[DEPLOY] Starting deploy process for ${lib}`)
  console.log("Updating package.json");
  const v = execSync(`cd libs/${lib} && npm version patch`);
  const version = v.toString().trim().substring(1)
  console.log(`Updated package.json to version ${version}`);

  // Fix peer dependencies in dist folder
  fixPeerDependencies(lib);

  console.log("Deploying...");
  execSync(`nx run ${lib}:deploy`, { stdio: 'inherit' });
  console.log("Deployed!");

  console.log("Committing...");
  execSync(`git commit -a -m "[${lib.toUpperCase()}] Version ${version}"`)

  console.log("Creating git tag...");
  execSync(`git tag -a ${lib}-${version} -m "${lib.toUpperCase()} Version ${version}"`)

  console.log("Pushing...");
  execSync(`git push --tags`)

  console.log(`[END] Finished deploying ${lib} ${version}`)
}
