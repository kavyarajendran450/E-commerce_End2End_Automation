import fs from "fs/promises"; 
class JsonUtil {
    
    static Json_file_path = 'C:\Users\KavyaRajendran(G10XI\OneDrive - G10X Technology Private Limited\Desktop\Credo\AutomationExe_POM\src\testdata';
    static async readJsonfile(fileName: string): Promise<any> {
        console.log(`Read Json file from: ${this.Json_file_path}/${fileName}.json`);
        let data = await fs.readFile(`${this.Json_file_path}/${fileName}.json`, 'utf-8');
        return JSON.parse(data);

    }

}