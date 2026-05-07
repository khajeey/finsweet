import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Blog() {
  return (
    <section className="max-w-[1250px] mx-auto my-[50px] flex gap-3">
      <p className="text-4xl font-semibold">Waiting to load...</p>
      <Box sx={{ display: "flex" }}>
        <CircularProgress aria-label="Loading…" />
      </Box>
    </section>
  );
}
