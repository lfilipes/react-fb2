import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
  return <TableCell 
              key={props.data[key]} 
              style={{width: '25%'}}
              onClick={event => this.handleClick(event,props.data[key])}
          >,
            {props.data[key]}
          </TableCell>
  })
}

export default class SlotTable extends React.Component {
  //export default function SlotTable() {
  //  const classes = useStyles();
  constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.hamdleClick = this.handleClick.bind(this);
  }
  
  handleClick = (event, cell) => {
    const { selectedSlot } = this.props.slotInfo;
    const selectedCell = cell;

    this.setState({ selectedSlot: selectedCell });
  };

  getKeys = () => {
    return Object.keys(this.props.slotInfo.slots[0]);
  }

  getHeader = () => {
    let keys = this.getKeys();
    return keys.map((key, index)=>{
    return <TableCell key={key} style={{width: '25%'}}>{key.toUpperCase()}</TableCell>
    })
  }

  getRowsData = () => {
    var items = this.props.slotInfo.slots;
    var keys = this.getKeys();
    return items.map((row, index)=>{
    return <TableRow key={index}><RenderRow key={index} data={row} keys={keys}/></TableRow>
    })
  }
  render(){
    
    return (
      <TableContainer component={Paper}>
        <Table className='table' aria-label="simple table">
          <TableHead>
            <TableRow>
              {this.getHeader()}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.getRowsData()}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}



{/*   Modification stack

            <TableCell style={{width: '40%'}}>Appointment Time Slot</TableCell>
            <TableCell style={{width: '60%'}} align="right">Slot</TableCell>

          {rows.map(row => (
            <TableRow key={row.slotTime}>
              <TableCell component="th" scope="row" style={{width: '40%'}}>
                {row.slotTime}
              </TableCell>
              <TableCell align="right" style={{width: '60%'}}>{row.slot}</TableCell>
            </TableRow>
          ))}
const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

//
//const rows = [
//    {slotTime:'9:00h - 10:00h', slot:'slot1'},
//    {slotTime:'10:00h - 11:00h', slot:'slot2'},
//    {slotTime:'11:00h - 12:00h', slot:'slot3'},
//    {slotTime:'13:00h - 14:00h', slot:'slot4'},
//    {slotTime:'14:00h - 15:00h', slot:'slot5'},
//    {slotTime:'15:00h - 16:00h', slot:'slot6'},
//    {slotTime:'16:00h - 17:00h', slot:'slot7'},
//    {slotTime:'17:00h - 18:00h', slot:'slot8'},
//]

*/}