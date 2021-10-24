import realm from "./RealmDataBase";

export function addMobileNumber(){
    realm.write(()=>{
        realm.create('Mobile',{
            mobileNumber:12
        })
    })
}

export function getMobileNumber(){
    return realm.objects('Mobile')[0].mobileNumber
}