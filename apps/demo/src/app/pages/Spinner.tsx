import { Container, Spinner } from "@valerya/components";
import { useAccentScheme } from "../hooks/useAccentScheme";


/**
 *
 *
 */
export default function Page({ ...props })
{
    const accentScheme = useAccentScheme()

    return (
      <Container center size="x2" gap="20" justifyContent="center" py="20">
                <div mb="10" dflex>
                    <Spinner size="sm" me="5" />
                    <Spinner size="md" me="5" />
                    <Spinner size="lg" me="5" />
                    <Spinner size="xl" me="5" />
                    <Spinner size="x2" me="5" />
                </div>

                <div mb="10" dflex>
                    <Spinner variant="track" size="sm" me="5" />
                    <Spinner variant="track" size="md" me="5" />
                    <Spinner variant="track" disabled size="lg" me="5" />
                    <Spinner variant="track" size="xl" me="5" />
                    <Spinner variant="track" size="x2" me="5" />
                </div>

                <div mb="10" dflex>
                    <Spinner size="sm" me="5" scheme={accentScheme} />
                    <Spinner size="md" me="5" scheme={accentScheme} />
                    <Spinner size="lg" me="5" scheme={accentScheme} disabled/>
                    <Spinner size="xl" me="5" scheme={accentScheme} />
                    <Spinner size="x2" me="5" scheme={accentScheme} />
                </div>

                <div mb="10" dflex>
                    <Spinner size="sm" me="5" trackColor="orange-800" />
                    <Spinner size="md" me="5" trackColor="orange-800" />
                    <Spinner size="lg" me="5" trackColor="orange-800" />
                    <Spinner size="xl" me="5" trackColor="orange-800" />
                    <Spinner size="x2" me="5" trackColor="orange-800" />
                </div>

                <div mb="10" dflex>
                    <Spinner size="sm" me="5" trackColor="orange-800" progress={25}/>
                    <Spinner size="md" me="5" trackColor="orange-800" progress={25} />
                    <Spinner size="lg" me="5" trackColor="orange-800" progress={25} />
                    <Spinner size="xl" me="5" trackColor="orange-800" progress={25} />
                    <Spinner size="x2" me="5" trackColor="orange-800" progress={25} />
                </div>

                <div mb="10" dflex>
                    <Spinner w="10" h="10" me="5" />
                    <Spinner w="11" h="11" me="5" />
                    <Spinner w="12" h="12" me="5" />
                    <Spinner w="14" h="14" me="5" />
                    <Spinner w="20" h="20" me="5"/>
                </div>

                <div mb="10" dflex>
                    <Spinner w="10" h="10" me="5" thickness="2"/>
                    <Spinner w="10" h="10" me="5" thickness="3px"/>
                    <Spinner w="10" h="10" me="5" thickness="4"/>
                    <Spinner w="10" h="10" me="5" thickness="6"/>
                    <Spinner w="10" h="10" me="5" thickness="8"/>
                </div>
            </Container>
    );
}
