import fs from 'fs'
import path from 'path';
export const ModelGeneratorController = {
    generateDjangoModel: (req, res) => {

    },
    generateExpressModel: async (req, res) => {
        //todo implement the logic for generating the express model.
        const {name, variables} = req.body
        // console.log(`name = ${name} and variables = ${variables}`)
        // console.log(typeof variables)
        // console.log(name)

        //todo find filename and write to it directly.
        const basicImports = `import mongoose from "mongoose"; \n`
        // const filePath = path.join(__dirname, '..', 'outmodels', '1.txt');
        const filePath = "./outmodels/1.txt"
        // const absolutePath = "C:\\Users\\DARIA TAGHVA\\Desktop\\finalproject\\backend\\outmodels\\1.txt"
        await fs.appendFile(filePath, basicImports, (err) => {
            if(err) throw err;
        })
        const defineSchema = `const someSchema = new mongoose.Schema({\n`;
        await fs.appendFile(filePath, defineSchema, (err) => {
            if(err) throw err;
        })
        for (let key in variables) {
            // console.log(key, variables[key]);
            let data = `${variables[key].name}:${variables[key].type} \n`
            // console.log(data)
            await fs.appendFile(filePath, data, (err) => {
                if(err)
                    throw err;
            })

        }
        const endSchema = "})\n"

        await fs.appendFile(filePath, endSchema, (err) => {
            if(err)
                throw err;
        })

        const createModel = `export default const ${name} = mongoose.model(${name}, someSchema);`
        await fs.appendFile(filePath, createModel, (err) => {
            if(err)
                throw err;
        })
        await res.status(200).json({'response': 'success'})

    },
    generatePHPModel: (req, res) => {
        const {name, variables} = req.body

    }
}