import React from 'react';
import ProjectDetailUI from './components/ProjectDetailUI';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return <ProjectDetailUI params={params} />;
} 