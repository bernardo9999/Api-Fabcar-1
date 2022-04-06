import * as express from 'express';
import { 
    FabcarController_init_post,
    FabcarController_queryOne_get,
    FabcarController_getAll_get,
    FabcarController_create_post,
    FabcarController_getHistoryCar_get,
    FabcarController_changeOwner_post,
    FabcarController_delete_delete } from './controllers'
export default express.Router()
.post('/fabcar/init', FabcarController_init_post)
.get('/fabcar/queryOne/:id', FabcarController_queryOne_get)
.get('/fabcar/getAll', FabcarController_getAll_get)
.post('/fabcar/create', FabcarController_create_post)
.get('/fabcar/getHistoryCar/:id', FabcarController_getHistoryCar_get)
.post('/fabcar/changeOwner', FabcarController_changeOwner_post)
.delete('/fabcar/delete/:id', FabcarController_delete_delete)
