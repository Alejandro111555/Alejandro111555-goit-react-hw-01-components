import { Box } from 'components/ui/Box';
import PropTypes from 'prop-types';
import {StatList, StatItem} from './Statistics.styled'

export const Statistics = ({title, items }) => {
    return (
        <Box
            p='16'
            display="flex"
            flexDirection="column"
            alignItems="center">
            <h2>{title}</h2>
                <StatList>
                    {items.map(item => (
                        <StatItem key={item.id}>
                            <span>{item.label}</span>
                            <span>{item.percentage} %</span>
                </StatItem>
            ))}
                </StatList>
        </Box>
    )
}

Statistics.protTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
}