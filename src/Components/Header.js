import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
        console.log('Click');
    }

    return (
        <header>
            <h1 className='header'>{title}</h1>
            <Button color={showAdd ? 'orange' : 'green'} text={showAdd ? 'Hide form' : 'Add a Task!'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black' 
// }

export default Header;
