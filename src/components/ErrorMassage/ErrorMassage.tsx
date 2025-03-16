import classNames from 'classnames';

type Props = {
  errorMassage: string;
  hideError: () => void;
};

export const ErrorMassage: React.FC<Props> = ({ errorMassage, hideError }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification',
        'is-danger',
        'is-light',
        'has-text-weight-normal',
        { hidden: errorMassage.length === 0 },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={hideError}
      />
      {/* show only one message at a time */}
      {errorMassage}
      {/*
      Unable to update a todo */}
    </div>
  );
};
