export default function ConvertDate (date){
const newDate = new Date(date[0]) ;
return  newDate.getDate() + "/" + newDate.getMonth()
}