import React, { useId } from "react";
import Button from "../Button";
import "./Card.scss";

interface CardProps {
  title: string;
  description?: string;
  onSave?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
  saveBtnText?: string;
  cancelBtnText?: string;
  saveDisabled?: boolean;
  cancelDisabled?: boolean;
  fullWidth?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  onSave,
  onCancel,
  children,
  saveBtnText = "Save",
  cancelBtnText = "Cancel",
  saveDisabled = false,
  cancelDisabled = false,
  fullWidth = false,
}) => {
  const titleId = useId();

  return (
    <article className={`card ${fullWidth ? "card--full-width" : ""}`} aria-labelledby={titleId}>
      <div className="card__header">
        <div className="card__header--left">
          <h2 id={titleId} className="card__title">{title}</h2>
          {description && (
            <p className="card__description">{description}</p>
          )}
        </div>
        <div className="card__header--right">
          <Button
            variant="outline-secondary"
            size="md"
            onClick={onCancel}
            disabled={cancelDisabled}
          >
            {cancelBtnText}
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={onSave}
            disabled={saveDisabled}
          >
            {saveBtnText}
          </Button>
        </div>
      </div>
      <div className="card__content">
        {children ? children : <p className="card__no-data">No data</p>}
      </div>
    </article>
  );
};

export default Card;
