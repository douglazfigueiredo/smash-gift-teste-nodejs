import fs from 'fs';
import csv from 'csv-parser';
import db from '../firebaseConfig';
import City from '../models/city';

class ImportDataService {
  public static async importData(csvFilePath: string): Promise<void> {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row: City) => {
        const { name, country, subcountry, geonameid } = row;

        db.collection('countries').doc(geonameid).set({
          name,
          country,
          subcountry,
          geonameid
        })
        .then(() => {
          console.log(`Documento ${geonameid} gravado com sucesso!`);
        })
        .catch((error: Error) => {
          console.error(`Erro ao gravar o documento: ${error}`);
        });
      })
      .on('end', () => {
        console.log('Arquivo CSV processado com sucesso');
      });
  }
}

export default ImportDataService;
