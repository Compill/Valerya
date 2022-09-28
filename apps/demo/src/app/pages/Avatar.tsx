import { Avatar, Container, } from "@valerya/components";



export default function Page({ ...props })
{

  return (
    <Container center dflex flexCol gap="4" justifyContent="center" p="3" bgColor="#e2e2e2">
      <div dflex flexRow gap="4">
        <Avatar size="xs" src="../assets/photo.jpg" />
        <Avatar size="sm" src="../assets/photo.jpg" />
        <Avatar size="md" src="../assets/photo.jpg" />
        <Avatar size="lg" src="../assets/photo.jpg" />
        <Avatar size="xl" src="../assets/photo.jpg" />
        <Avatar size="x2" src="../assets/photo.jpg" />
        <Avatar size="x3" src="../assets/photo.jpg" />
        <Avatar size="x4" src="../assets/photo.jpg" />
        <Avatar size="x5" src="../assets/photo.jpg" />
        <Avatar size="x6" src="../assets/photo.jpg" />
        <Avatar size="x7" src="../assets/photo.jpg" />
      </div>

      <div dflex flexRow gap="4">
        <Avatar size="xs" name="Yohan Gerbaud" />
        <Avatar size="sm" name="Yohan Gerbaud" />
        <Avatar size="md" name="Yohan Gerbaud" />
        <Avatar size="lg" name="Yohan Gerbaud" />
        <Avatar size="xl" name="Yohan Gerbaud" />
        <Avatar size="x2" name="Yohan Gerbaud" />
        <Avatar size="x3" name="Yohan Gerbaud" />
        <Avatar size="x4" name="Yohan Gerbaud" />
        <Avatar size="x5" name="Yohan Gerbaud" />
        <Avatar size="x6" name="Yohan Gerbaud" />
        <Avatar size="x7" name="Yohan Gerbaud" />
      </div>

      <div dflex flexRow gap="4">
        <Avatar size="xs" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="sm" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="md" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="lg" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="xl" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="x2" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="x3" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="x4" src="../assets/photo.jpg"  name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="x5" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="x6" name="Yohan Gerbaud" badge badgeText="5" />
        <Avatar size="x7" name="Yohan Gerbaud" badge badgeText="5" />
      </div>

      <div dflex flexRow gap="4">
        <Avatar src="../assets/photo.jpg" size="sm" name="Yohan Gerbaud" badge badgePosition="centerStart" />
        <Avatar badgePosition="centerEnd" size="md" badge />
        <Avatar name="Yohan Gerbaud" badge badgePosition="topStart" corners="pill" />
        <Avatar src="../assets/pho.jpg" badge badgePosition="topEnd" badgeText={5} />
        <Avatar src="../assets/pho.jpg" name="Yohan Gerbaud" badge />
        <Avatar src="../assets/photo.jpg" size="xl" name="albin erd" badge badgeColor="red" />
        <Avatar src="../assets/photo.jpg" size="x2" name="han baud" corners="rounded" badge />
      </div>
    </Container>
  );
}
