import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://tabaa200:sliman-123456@cluster.aeeib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster',
      ),
  },
];
