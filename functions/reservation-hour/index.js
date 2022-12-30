

export default (event, context) => {

  const { hourFirstSelected, hourFinishSelected, doctorSelected } = event.input

  const avalibleHours = [
    { hourAvailible: '8:00 - 9:00', hourFirst: 800, HourFinish: 900, avalibeStatus: true, Doctor: 'Bastian Ahumada' },
    { hourAvailible: '10:00 - 11:00', hourFirst: 1000, HourFinish: 1100, avalibeStatus: true, Doctor: 'Bastian Ahumada' },
    { hourAvailible: '12:15 - 13:00', hourFirst: 1115, HourFinish: 1200, avalibeStatus: true, Doctor: 'Camila Jimenez' },
    { hourAvailible: '14:00 - 15:00', hourFirst: 1215, HourFinish: 1300, avalibeStatus: true, Doctor: 'Bastian Ahumada' },
    { hourAvailible: '16:00 - 17:00', hourFirst: 1315, HourFinish: 1400, avalibeStatus: true, Doctor: 'Bastian Ahumada' },
    { hourAvailible: '17:00 - 18:00', hourFirst: 1600, HourFinish: 1700, avalibeStatus: true, Doctor: 'Camila Jimenez' },
  ]


  const FilterByHoursSelected = FilterHoursByDoctorSelected(doctorSelected, avalibleHours)
  FindHours( hourFirstSelected, hourFinishSelected , FilterByHoursSelected) 
  

  console.log('avalibleHours', avalibleHours)

}


function FindHours(hourFirstSelected, hourFinishSelected , FilterByHoursSelected) {

  FilterByHoursSelected.forEach((e) => {
    console.log('e', e.hourFirst, e.HourFinish)
    console.log('e', hourFirstSelected, hourFinishSelected)

    if (e.hourFirst >= hourFirstSelected && e.HourFinish <= hourFinishSelected) {
      e.avalibeStatus = false
    }
  })

  return FilterByHoursSelected
}


function FilterHoursByDoctorSelected(nameDoctor, ArrayGet) {
  const HoursByDoctor = ArrayGet.filter(e => e.Doctor === nameDoctor)

  return HoursByDoctor
}
