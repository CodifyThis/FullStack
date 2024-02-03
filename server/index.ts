import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const input = document.getElementById("test");
input!.innerHTML="Test";

function CreatePokemon(pname:string="", purl:string=""){
  return {data:{name:pname,url:purl}}
}


async function main() {
  const poke = await prisma.pokemon.create(CreatePokemon("Daniel"))
  console.log(`Pokemon $(poke) created`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
