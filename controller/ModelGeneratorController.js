
import path from 'path';
import writeFile from "../files/writeInFile.js";
let numberOfFile = 0;

const typeMappingExpress = {
    'رشته': 'String',
    'عددصحیح': 'Number',
    'تاریخ': 'Date',
    'تاریخوزمان': 'Date',
    'بولی': 'Boolean',
    'string': 'String',
    'integer': 'Number',
    'boolean': 'Boolean',
    'date': 'Date',
    'datetime': 'Date',
};
const typeMappingDjango = {
    'boolean': 'BooleanField()',
    'datetime': 'DateTimeField()',
    'date': 'DateField()',
    'string': 'CharField(max_length=50)',
    'integer': 'IntegerField()',
};
export const ModelGeneratorController = {
    generateDjangoModel: async (req, res) => {
        const { name, variables } = req.body;
        numberOfFile++;

        const filePath = `./outmodels/${numberOfFile}.py`;
        const basicImports = `from django.db import models\n\n`;

        await writeFile(filePath, basicImports);
        await writeFile(filePath, `class ${name}(models.Model):\n`);

        for (let key in variables) {
            let fieldType = typeMappingDjango[variables[key].type.toLowerCase()] || 'TextField()';
            let data = `    ${variables[key].name} = models.${fieldType}\n`;
            await writeFile(filePath, data);
        }

        await writeFile(filePath, '\n');
        res.status(200).json({ 'response': 'success', 'modelID': numberOfFile });
    },
    generateExpressModel: async (req, res) => {
        const { name, variables } = req.body;
        numberOfFile++;
        const filePath = `./outmodels/${numberOfFile}.js`;
        const basicImports = `import mongoose from "mongoose";\n\n`;
        await writeFile(filePath, basicImports);
        await writeFile(filePath, `const ${name}Schema = new mongoose.Schema({\n`);
        for (let key in variables) {
            let fieldType = typeMappingExpress[variables[key].type.toLowerCase()] || 'String';
            console.log(fieldType)
            let data = `    ${variables[key].name}: ${fieldType},\n`;
            await writeFile(filePath, data);
        }
        await writeFile(filePath, `});\n\n`);
        await writeFile(filePath, `const ${name} = mongoose.model('${name}', ${name}Schema);\n\n`);
        await writeFile(filePath, `export default ${name};\n`);
        res.status(200).json({ 'response': 'success', 'modelID':  numberOfFile});
    },

}