import { Chip } from "@/shared/ui/chip";

import styles from "./VacancyCard.module.scss";

export function VacancyCard({
  name,
  description,
  tags,
}: {
  name: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className={styles.tagList}>
        {tags.map((tag) => (
          <li key={tag}>
            <Chip>{tag}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}
