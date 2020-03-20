import {sequelize} from './database/sequelize';
import {Book} from './models/book/model/book.entity';
import app from './app';

const server = app.listen(3000, async () => {
    await sequelize.sync({force: true});

    // sequelize.addModels([Book]);
    // tslint:disable-next-line:no-console
    console.log(
        "  App is running on port 3000",
    );
});

export default server;
