import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Что-то пошло не так')}</p>
      <Button onClick={reload}>{t('Обновить')}</Button>
    </div>
  );
};

export default PageError;
