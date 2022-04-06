import { Request, Response } from 'express';
import { FabcarControllerBackEnd } from '../convector';


export async function FabcarController_init_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await FabcarControllerBackEnd
                .initLedger());
            
    } catch(ex) {
        console.log('Error post FabcarController_init', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_queryOne_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await FabcarControllerBackEnd
            .queryCar(params.id));
        
    } catch(ex) {
        console.log('Error get FabcarController_queryOne', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_getAll_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await FabcarControllerBackEnd
            .queryAllCars());
        
    } catch(ex) {
        console.log('Error get FabcarController_getAll', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_create_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await FabcarControllerBackEnd
                .createCar(params.car));
            
    } catch(ex) {
        console.log('Error post FabcarController_create', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_getHistoryCar_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await FabcarControllerBackEnd
            .getHistoryCar(params.id));
        
    } catch(ex) {
        console.log('Error get FabcarController_getHistoryCar', ex.stack);
        res.status(500).send(ex);
    }
}
export async function FabcarController_changeOwner_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await FabcarControllerBackEnd
                .changeCarOwner(params.id,params.owner));
            
    } catch(ex) {
        console.log('Error post FabcarController_changeOwner', ex.stack);
        res.status(500).send(ex);
    }

}
    export async function FabcarController_delete_delete(req: Request, res: Response): Promise<void>{
        try{
            let params = req.params;
                res.status(200).send(await FabcarControllerBackEnd
                    .delete(params.id));
                
        } catch(ex) {
            console.log('Error post FabcarController_delete', ex.stack);
            res.status(500).send(ex);
        }
    }
