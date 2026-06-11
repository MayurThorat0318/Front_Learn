import React, { useState } from 'react';
import './BoxModelVisualizer.css';

export default function BoxModelVisualizer() {
  const [padding, setPadding] = useState(16);
  const [margin, setMargin] = useState(16);
  const [border, setBorder] = useState(4);
  const [boxWidth, setBoxWidth] = useState(180);

  // Computed layout sizing
  const totalWidth = boxWidth + (padding * 2) + (border * 2);

  return (
    <div className="visualizer-container fade-in">
      <h3 className="visualizer-title">CSS Box Model Sandbox</h3>
      <p className="visualizer-desc">Tweak the sliders to inspect how margins, borders, paddings, and widths interact.</p>

      {/* Control Sliders Panel */}
      <div className="visualizer-controls">
        <div className="control-group">
          <label htmlFor="margin-slider">Margin: <span>{margin}px</span></label>
          <input
            id="margin-slider"
            type="range"
            min="0"
            max="40"
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label htmlFor="border-slider">Border: <span>{border}px</span></label>
          <input
            id="border-slider"
            type="range"
            min="0"
            max="15"
            value={border}
            onChange={(e) => setBorder(Number(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label htmlFor="padding-slider">Padding: <span>{padding}px</span></label>
          <input
            id="padding-slider"
            type="range"
            min="0"
            max="40"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label htmlFor="width-slider">Content Width: <span>{boxWidth}px</span></label>
          <input
            id="width-slider"
            type="range"
            min="100"
            max="250"
            value={boxWidth}
            onChange={(e) => setBoxWidth(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Visual Nested Boxes Display */}
      <div className="visualizer-display">
        {/* Margin Box (Outermost) */}
        <div className="box-model-margin" style={{ padding: `${margin}px` }}>
          <span className="box-label margin-label">Margin ({margin}px)</span>

          {/* Border Box */}
          <div className="box-model-border" style={{ padding: `${border}px` }}>
            <span className="box-label border-label">Border ({border}px)</span>

            {/* Padding Box */}
            <div className="box-model-padding" style={{ padding: `${padding}px` }}>
              <span className="box-label padding-label">Padding ({padding}px)</span>

              {/* Content Box (Innermost) */}
              <div className="box-model-content" style={{ width: `${boxWidth}px`, height: '60px' }}>
                <span className="box-label content-label">Content ({boxWidth}px x 60px)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box Model Metadata Formula */}
      <div className="visualizer-formula">
        <strong>Box Sizing Math:</strong>
        <code className="formula-code">
          Actual space width = Width ({boxWidth}px) + Left/Right Padding ({padding * 2}px) + Left/Right Border ({border * 2}px) = {totalWidth}px
        </code>
      </div>
    </div>
  );
}
