import Image from "next/image";
import { Stack, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function ImageHolder(props) {
  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="flex-start"
      className="flex-wrap m-16 sm:flex-nowrap justify-center"
    >
      {" "}
      {/* Use flex-wrap */}
      <Image src={props.source} width={500} height={500} />
      <Stack flex={1}>
        {" "}
        {/* Make description take available space */}
        <Typography variant="p">Description</Typography>
        {/* Add more description elements as needed */}
        <Typography variant="p">More description text here...</Typography>
        <Box sx={{ width: 200, height: 200, border: "1px dashed gray" }}>
          {" "}
          {/* Placeholder for more images */}
          {/* You can add your image gallery or other content here */}
          <Typography variant="body2" color="gray" textAlign="center">
            Additional Images / Content
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
