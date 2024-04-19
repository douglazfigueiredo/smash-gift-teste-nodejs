import ImportDataService from '../services/importDataService';

class ImportDataController {
  public static async importData(csvFilePath: string): Promise<void> {
    try {
      await ImportDataService.importData(csvFilePath);
    } catch (error) {
      console.error(`Erro ao importar dados: ${error}`);
    }
  }
}

export default ImportDataController;
