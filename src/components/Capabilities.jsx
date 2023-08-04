import React from 'react';

const Card = (props) => {
  return (
    <div className="card stroke">
      <p><strong>{props.title}</strong></p>
      <p className='subtext'>{props.children}</p>
    </div>
  );
}

const Capabilities = () => {
  return (
    <div className="capabilities" id="capabilities">
      <h2 className='heading center'>What we do</h2>
      <div className='cards'>
        <Card title="Web Design">A branded site, splash page, event site, dashboard, the possibilities are endless.</Card>
        <Card title="Email">Single emails or branded design templates for an all out e-campaign.</Card>
        <Card title="Marketing Materials">Letterhead, business cards, resume, fliers, product packaging, documentation...</Card>
        <Card title="Copywriting">Because sometimes words are hard.<br />We do good words.</Card>
        <Card title="Design Systems">A suite of branded, bulletproof Figma components for product design.</Card>
        <Card title="Frontend">We’ll do the HTML & CSS, you plug it in. It just works, right out of the box.</Card>
      </div>
    </div>  
  );
}

export default Capabilities;