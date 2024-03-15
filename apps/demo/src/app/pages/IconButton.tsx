import { Button, Container, IconButton } from "@valerya/ui";
import { usePrimaryScheme } from "../hooks/usePrimaryScheme";
import { useSecondaryScheme } from "../hooks/useSecondaryScheme";
import { useTertiaryScheme } from "../hooks/useTertiaryScheme";

export const linktreeIcon = "m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"


/**
 *
 *
 */
export default function Page({ ...props })
{
  const primaryScheme = usePrimaryScheme()
  const secondaryScheme = useSecondaryScheme()
  const tertiaryScheme = useTertiaryScheme()

  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">

      <div dflex flexRow gap="3">
        <IconButton icon={linktreeIcon} size="sm" rounded="full" variant="glass" />
        <IconButton icon={linktreeIcon} size="md" rounded="full" variant="glass" />
        <IconButton icon={linktreeIcon} size="lg" rounded="full" variant="glass" />
        <IconButton icon={linktreeIcon} size="xl" rounded="full" variant="glass" />
        <IconButton icon={linktreeIcon} size="x2" rounded="full" variant="glass" />
      </div>

    </Container>
  );
}
