const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://cferguson25:Password@cluster0.glue8uc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};