import React, { useState } from 'react';
import './FlexboxVisualizer.css';

export default function FlexboxVisualizer() {
  // Flex layout state variables
  const [direction, setDirection] = useState('row');
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('center');
  const [gap, setGap] = useState(16);
  const [itemCount, setItemCount] = useState(3);

  // Helper to construct numbers of items
  const items = Array.from({ length: itemCount }, (_, idx) => idx + 1);

  // Generate real-time CSS rules output
  const generatedCss = `.flex-container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap}px;
}`;

  return (
    <div className="flex-visualizer-container fade-in">
      <h3 className="visualizer-title">CSS Flexbox Layout Sandbox</h3>
      <p className="visualizer-desc">Tweak the container properties to observe items distribute themselves along the layout axes.</p>

      <div className="visualizer-workspace">
        {/* Controls Layout Panel */}
        <div className="flex-controls">
          {/* Flex Direction */}
          <div className="control-group">
            <span className="control-label">flex-direction:</span>
            <div className="toggle-buttons">
              {['row', 'row-reverse', 'column', 'column-reverse'].map((val) => (
                <button
                  key={val}
                  type="button"
                  className={`toggle-btn ${direction === val ? 'active' : ''}`}
                  onClick={() => setDirection(val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Justify Content */}
          <div className="control-group">
            <span className="control-label">justify-content:</span>
            <div className="toggle-buttons flex-wrap-buttons">
              {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map((val) => (
                <button
                  key={val}
                  type="button"
                  className={`toggle-btn ${justify === val ? 'active' : ''}`}
                  onClick={() => setJustify(val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Align Items */}
          <div className="control-group">
            <span className="control-label">align-items:</span>
            <div className="toggle-buttons">
              {['flex-start', 'center', 'flex-end', 'stretch'].map((val) => (
                <button
                  key={val}
                  type="button"
                  className={`toggle-btn ${align === val ? 'active' : ''}`}
                  onClick={() => setAlign(val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Gap Slider */}
          <div className="control-group gap-slider-container">
            <label htmlFor="gap-slider">gap: <span>{gap}px</span></label>
            <input
              id="gap-slider"
              type="range"
              min="0"
              max="40"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
            />
          </div>

          {/* Item Count Buttons */}
          <div className="control-group">
            <span className="control-label">Flex Items Count:</span>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                type="button"
                className="count-btn"
                disabled={itemCount <= 2}
                onClick={() => setItemCount(prev => prev - 1)}
              >
                -
              </button>
              <span className="item-count-display">{itemCount} Items</span>
              <button
                type="button"
                className="count-btn"
                disabled={itemCount >= 6}
                onClick={() => setItemCount(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Live CSS Preview Gutter */}
        <div className="flex-css-preview">
          <h4>Generated CSS Code:</h4>
          <pre><code>{generatedCss}</code></pre>
        </div>
      </div>

      {/* Live Container Preview Display */}
      <div 
        className="flex-preview-box"
        style={{
          display: 'flex',
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap: `${gap}px`
        }}
      >
        {items.map((num) => (
          <div key={num} className={`flex-preview-item item-${num}`}>
            <span className="item-num">{num}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
