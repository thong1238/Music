import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Timer from '~/components/Timer';

import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

import { faBackwardStep, faBars, faForwardStep, faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faCirclePause, faCirclePlay, faClock } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Dashboard({ full, menu }) {
    const classes = cx('dashboard', { full, menu });

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    return (
        <div className={classes}>
            {full ? <FontAwesomeIcon className={cx('shuffle')} icon={faShuffle} /> : null}
            {menu ? <FontAwesomeIcon onClick={visible ? hide : show} className={cx('clock')} icon={faClock} /> : null}
            <FontAwesomeIcon className={cx('backward')} icon={faBackwardStep} />
            <FontAwesomeIcon className={cx('play')} icon={faCirclePlay} />
            <FontAwesomeIcon className={cx('pause')} icon={faCirclePause} />
            <FontAwesomeIcon className={cx('forward')} icon={faForwardStep} />
            {full ? <FontAwesomeIcon className={cx('repeat')} icon={faRepeat} /> : null}
            {menu ? <Link to="/">{<FontAwesomeIcon className={cx('bar')} icon={faBars} />}</Link> : null}
            {menu && visible ? <Timer hide={hide} /> : null}
        </div>
    );
}

export default Dashboard;
