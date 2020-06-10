import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';

const makeClasses = makeStyles((theme: Theme) => ({
    drawerContent: {
        marginTop: '25px',
        marginRight: '20px',
        marginLeft: '5px',
    }
}));

interface IDrawerComponentProps {
    shouldBeOpen: boolean,
    Click: () => void;
}

const DrawerComponent: React.FC<IDrawerComponentProps> = ({ shouldBeOpen, Click }) => {
    const classes = makeClasses();
    const [isOpen, setIsOpen] = React.useState(false);
    const history = useHistory();

    const RedirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>

    return (
        <div onClick={()=>Click()}>
            <Drawer open={isOpen || shouldBeOpen}onClose={() => setIsOpen(false)}>
                <div className={classes.drawerContent}>
                <MenuItem>
                    <HomeIcon/>{RedirectTo('/', 'Home')}
                </MenuItem>
                <MenuItem>
                     <MovieIcon/>{RedirectTo('/movie', 'Movie')}
                </MenuItem>
                <MenuItem>
                     <SearchIcon/>{RedirectTo('/search', 'Search Movie')}
                </MenuItem>               
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;