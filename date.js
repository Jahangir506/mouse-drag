// const date = new Date();


const date1 = new Date('1998-12-01');
const date2 = new Date('1977-05-12')

if( date1.getTime() < date2.getTime()){
    console.log('before');
}
else{
    console.log('not before');
}