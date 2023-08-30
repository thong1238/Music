import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Library from '~/components/Library';

import classNames from 'classnames/bind';
import styles from './Option.module.scss';
import { faHeartCirclePlus, faMusic, faSliders } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Option() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('option')}>
                <Link to="/favorate">{<FontAwesomeIcon className={cx('add')} icon={faHeartCirclePlus} />}</Link>

                <FontAwesomeIcon onClick={visible ? hide : show} className={cx('create-playlist')} icon={faMusic} />
                <span>+</span>

                {visible ? <Library hide={hide} /> : null}

                <Link to="/menu">{<FontAwesomeIcon className={cx('menu', 'active')} icon={faSliders} />}</Link>
            </div>
        </div>
    );
}

export default Option;
