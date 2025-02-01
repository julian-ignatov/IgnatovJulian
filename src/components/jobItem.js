import Link from 'next/link';

export default function JobItem({ job }) {
  return (
    <li style={{ marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ddd' }}>
      <Link href={`/jobs/${job.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <h3>{job.title} at {job.company}</h3>
          <p>{job.date}</p>
        </div>
      </Link>
    </li>
  );
}
