import app from "./app";
const PORT = process.env.PORT || 4000
async function main() {
  try {
    await app.listen(PORT);
    
    console.log(`server on port ${PORT}`);
  } catch (error) {
      console.log('error : ',error)
  }
}
main();
