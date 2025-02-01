'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { jobs as staticJobs } from '../../../data/jobs';

export default function JobDetails() {
  const params = useParams();
  const jobId = parseInt(params.id, 10);
  const job = staticJobs.find(j => j.id === jobId);

  const [isEditing, setIsEditing] = useState(false);
  const [editedJob, setEditedJob] = useState(job);

  if (!job) {
    return <div>Job not found.</div>;
  }

  function handleEditToggle() {
    setIsEditing(!isEditing);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEditedJob({ ...editedJob, [name]: value });
  }

  function handleResponsibilitiesChange(e) {
    setEditedJob({
      ...editedJob,
      responsibilities: e.target.value.split('\n')
    });
  }

  function handleSave() {
    setIsEditing(false);
  }

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <Link href="/">← Back to Resume</Link>
      {isEditing ? (
        <div>
          <h2>Edit Job</h2>
          <label>
            Title:
            <input 
              type="text"
              name="title"
              value={editedJob.title}
              onChange={handleChange}
              style={{ display: 'block', margin: '0.5rem 0' }}
            />
          </label>
          <label>
            Company:
            <input 
              type="text"
              name="company"
              value={editedJob.company}
              onChange={handleChange}
              style={{ display: 'block', margin: '0.5rem 0' }}
            />
          </label>
          <label>
            Date:
            <input 
              type="text"
              name="date"
              value={editedJob.date}
              onChange={handleChange}
              style={{ display: 'block', margin: '0.5rem 0' }}
            />
          </label>
          <label>
            Responsibilities (one per line):
            <textarea 
              name="responsibilities"
              value={editedJob.responsibilities.join('\n')}
              onChange={handleResponsibilitiesChange}
              rows={5}
              style={{ display: 'block', width: '100%', margin: '0.5rem 0' }}
            />
          </label>
          <button onClick={handleSave} style={{ marginRight: '1rem' }}>Save</button>
          <button onClick={handleEditToggle}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{job.title} at {job.company}</h2>
          <p>{job.date}</p>
          <h3>Responsibilities:</h3>
          <ul>
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
          <button onClick={handleEditToggle}>Edit Job</button>
        </div>
      )}
    </div>
  );
}
