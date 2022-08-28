import PropTypes from 'prop-types';
import { Box } from 'components/ui/Box';
import {TableHead, TableData} from './TransactionHistory.styled'


export const TransactionHistory = ({items}) => {
  return (
    <Box
      width="600px"
      display="flex"
      justifyContent="center"
      p='16'>
        <table >
          <thead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Currency</TableHead>
          </thead>
          <tbody>
          {items.map(({id,type,amount,currency,}) => 
              <tr key={id}>
                <TableData>{type}</TableData>
                <TableData>{amount }</TableData>
                <TableData>{currency}</TableData>
              </tr>)}
          </tbody>
      </table>
    </Box>
)
}


TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(
      PropTypes.shape({
        id:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired
      })
    )
}