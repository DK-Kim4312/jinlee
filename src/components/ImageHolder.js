import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";


export default function ImageHolder(props) {
    console.log(props);
  return (
    <Stack>
      <Image
        src={props.source}
        placeholder="blur"
        alt="placeholder"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        width={500}
        height={500}
      />
      {/* Text For Description */}
      <Stack>
        <Typography variant="p">Description</Typography>
      </Stack>
    </Stack>
  );
}
