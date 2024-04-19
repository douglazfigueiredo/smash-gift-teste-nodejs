import ImportDataController from './controllers/importDataController';

const csvFilePath = './data/world-cities.csv';

async function main() {
  try {
    await ImportDataController.importData(csvFilePath);
  } catch (error) {
    console.error(`Erro ao executar o aplicativo: ${error}`);
  }
}

main();
