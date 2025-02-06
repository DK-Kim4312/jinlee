import Image from "next/image";
import { Button, Box } from "@mui/material";
import Link from "next/link";

const colors = ["#FF0000", "#87CEEB", "#00FF00", "#FFA500", "#00008B"];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        width="100%" 
        maxWidth="600px"
      >
        {colors.map((color, index) => (
          <Button
            key={index}
            component={Link}
            href={index === 0 ? "/" : `/work${index}`}
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              minWidth: 'unset',
              backgroundColor: color,
              '&:hover': {
                backgroundColor: color,
                opacity: 0.8,
              },
            }}
          />
        ))}
      </Box>
    </div>
  );
}
