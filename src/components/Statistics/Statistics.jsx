import { Box } from 'components/ui/Box';
import PropTypes from 'prop-types';
import {StatList, StatItem} from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    
     return (
        <Box
            p='16'
            display="flex"
            flexDirection="column"
            alignItems="center">
            {title && <h2>{title}</h2>}
                <StatList>
                    {stats.map(({id,label,percentage}) => (
                        <StatItem key={id}>
                            <span>{label}</span>
                            <span>{percentage} %</span>
                </StatItem>
            ))}
                </StatList>
        </Box>
    )
}

Statistics.propTypes = {
    title:PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired
        })
      ).isRequired
}