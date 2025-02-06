import Image from "next/image";
import { Button, Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ImageHolder from "@/components/ImageHolder";

export default function Work1() {
  return (
    <Stack>
      <ImageHolder source="/images/1.jpeg" />
    </Stack>
  );
}
