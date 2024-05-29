import mongoose from "mongoose";

const mongodbURL = "mongodb://0.0.0.0:27017/nocode"
export function connect_database(){
    mongoose.connect(mongodbURL).then(
        () => {
            console.log('database connected')
        }
    ).catch(
        (err) => {
            console.log('error connecting the database.')
            console.log(err)
            process.exit(0)
        }
    )
}