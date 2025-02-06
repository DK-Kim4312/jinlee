import Image from "next/image";
import { Button, Box, Typography } from "@mui/material";
import Link from "next/link";

const colors = ["#FF0000", "#87CEEB", "#00FF00", "#FFA500", "#00008B"];
const numButtons = colors.length;

export default function Home() {
  const radius = 100; // Adjust this value to control the circle size

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <Typography variant="h1">Jin Lee</Typography>
      </div>
      <Box
        display="flex"
        justifyContent="center" // Center the circle
        alignItems="center"
        width="100%"
        maxWidth="600px"
      >
        <div style={{ position: 'relative', width: `${2 * radius}px`, height: `${2 * radius}px` }}> {/* Container for the circle */}
          {colors.map((color, index) => {
            const angle = (2 * Math.PI * index) / numButtons;
            const x = radius + radius * Math.cos(angle) - 15; // Subtract half button size for centering
            const y = radius + radius * Math.sin(angle) - 15;

            return (
              <Button
                key={index}
                component={Link}
                href={index === 0 ? "/" : `/work${index}`}
                sx={{
                  position: 'absolute',
                  top: `${y}px`,
                  left: `${x}px`,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  minWidth: 'unset',
                  backgroundColor: color,
                  '&:hover': {
                    backgroundColor: color,
                    opacity: 0.8,
                  },
                }}
              />
            );
          })}
        </div>
      </Box>
    </div>
  );
}