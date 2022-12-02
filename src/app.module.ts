import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),
        MongooseModule.forRoot(
            'mongodb://root:password@localhost:27017/?authMechanism=DEFAULT',
        ),
        PokemonModule,
        CommonModule,
    ],
})
export class AppModule {}
