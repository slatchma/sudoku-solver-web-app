import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import '../../styles/resolve.css';

/**
 * @desc resolve's part of application
 */
const Resolve = () => {
  const { t } = useTranslation();
    return (
        <div className="resolve">
            <Button type="submit" variant="contained" color="primary">{t('resolve')}</Button>
        </div>
    );
};

export default Resolve;