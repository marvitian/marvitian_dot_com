import React, { useState } from 'react';
import './ASIC.css';

const ASIC = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Blog posts data - you can easily add new entries here
  const blogPosts = [
    {
      id: 1,
      title: "Starting My ASIC Design Journey",
      date: "2025-08-03",
      phase: "Planning",
      tags: ["RTL", "Planning", "Architecture"],
      excerpt: "Beginning my journey through the RTL to GDS flow. Setting up tools and defining project scope.",
      content: `
        Today marks the beginning of my ASIC design project! I'm excited to document my progress through the complete RTL to GDS flow.

        **Project Goals:**
        - Design a simple but functional ASIC
        - Learn the complete RTL to GDS methodology
        - Document challenges and solutions
        - Build a solid foundation for future designs

        **Tools I'm Planning to Use:**
        - Verilog/SystemVerilog for RTL design
        - Synthesis tools (Synopsys Design Compiler or open-source alternatives)
        - Place & Route tools
        - Verification tools (testbenches, assertions)

        **Next Steps:**
        1. Define the specification and architecture
        2. Set up the development environment
        3. Begin RTL coding
        4. Create comprehensive testbenches

        The journey begins now!
      `,
      progress: 5
    },
    {
      id: 2,
      title: "RTL Design Phase - Architecture Planning",
      date: "2025-08-05",
      phase: "RTL Design",
      tags: ["RTL", "Architecture", "Specification"],
      excerpt: "Defining the architecture and starting the RTL design phase. Block diagrams and module hierarchy planning.",
      content: `
        **Architecture Overview:**
        After careful consideration, I've decided to design a simple CPU core to understand the complete flow.

        **Key Components:**
        - Instruction Fetch Unit
        - Decode Unit
        - ALU (Arithmetic Logic Unit)
        - Register File
        - Control Unit

        **RTL Coding Standards:**
        - Using SystemVerilog for better features
        - Implementing proper clock domain crossing
        - Adding assertions for verification
        - Following naming conventions

        **Current Progress:**
        ✅ Architecture specification complete
        🔄 RTL coding in progress
        ⏳ Testbench development planned

        The design is taking shape!
      `,
      progress: 25
    }
  ];

  // RTL to GDS flow phases
  const flowPhases = [
    { name: "Specification", status: "completed", progress: 100 },
    { name: "RTL Design", status: "in-progress", progress: 65 },
    { name: "Verification", status: "pending", progress: 0 },
    { name: "Synthesis", status: "pending", progress: 0 },
    { name: "Floor Planning", status: "pending", progress: 0 },
    { name: "Place & Route", status: "pending", progress: 0 },
    { name: "Sign-off", status: "pending", progress: 0 },
    { name: "GDS Generation", status: "pending", progress: 0 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#4CAF50';
      case 'in-progress': return '#FF9800';
      case 'pending': return '#9E9E9E';
      default: return '#9E9E9E';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="asic-blog">
      <header className="blog-header">
        <h1>ASIC Design Journey</h1>
        <p className="subtitle">RTL to GDS Flow Progress</p>
        <div className="project-stats">
          <div className="stat">
            <span className="stat-number">{blogPosts.length}</span>
            <span className="stat-label">Blog Posts</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {Math.round(flowPhases.reduce((acc, phase) => acc + phase.progress, 0) / flowPhases.length)}%
            </span>
            <span className="stat-label">Overall Progress</span>
          </div>
        </div>
      </header>

      <div className="blog-content">
        <aside className="sidebar">
          <div className="flow-progress">
            <h3>RTL to GDS Flow</h3>
            <div className="flow-phases">
              {flowPhases.map((phase, index) => (
                <div key={index} className={`phase-item ${phase.status}`}>
                  <div className="phase-indicator" style={{ backgroundColor: getStatusColor(phase.status) }}>
                    {phase.status === 'completed' && '✓'}
                    {phase.status === 'in-progress' && '⚡'}
                    {phase.status === 'pending' && '⏳'}
                  </div>
                  <div className="phase-info">
                    <span className="phase-name">{phase.name}</span>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${phase.progress}%`,
                          backgroundColor: getStatusColor(phase.status)
                        }}
                      ></div>
                    </div>
                    <span className="progress-text">{phase.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tags-cloud">
            <h3>Tags</h3>
            <div className="tags">
              {[...new Set(blogPosts.flatMap(post => post.tags))].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        <main className="main-content">
          {selectedPost ? (
            <article className="full-post">
              <button 
                className="back-button" 
                onClick={() => setSelectedPost(null)}
              >
                ← Back to Posts
              </button>
              <header className="post-header">
                <h2>{selectedPost.title}</h2>
                <div className="post-meta">
                  <span className="date">{formatDate(selectedPost.date)}</span>
                  <span className="phase">{selectedPost.phase}</span>
                  <div className="tags">
                    {selectedPost.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </header>
              <div className="post-content">
                {selectedPost.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                    return <h3 key={index}>{paragraph.replace(/\*\*/g, '')}</h3>;
                  }
                  if (paragraph.trim().startsWith('✅') || paragraph.trim().startsWith('🔄') || paragraph.trim().startsWith('⏳')) {
                    return <p key={index} className="status-item">{paragraph}</p>;
                  }
                  if (paragraph.trim().startsWith('-')) {
                    return <li key={index}>{paragraph.substring(1).trim()}</li>;
                  }
                  if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>;
                  }
                  return <br key={index} />;
                })}
              </div>
            </article>
          ) : (
            <div className="posts-list">
              {blogPosts.map(post => (
                <article key={post.id} className="post-card">
                  <header className="post-card-header">
                    <h3 onClick={() => setSelectedPost(post)} className="post-title">
                      {post.title}
                    </h3>
                    <div className="post-meta">
                      <span className="date">{formatDate(post.date)}</span>
                      <span className="phase">{post.phase}</span>
                    </div>
                  </header>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="progress-indicator">
                      <span>Progress: {post.progress}%</span>
                      <div className="mini-progress-bar">
                        <div 
                          className="mini-progress-fill" 
                          style={{ width: `${post.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <button 
                    className="read-more"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More →
                  </button>
                </article>
              ))}
              
              <div className="add-post-placeholder">
                <h3>📝 Next Update Coming Soon...</h3>
                <p>Continue documenting your ASIC design progress here!</p>
                <div className="update-instructions">
                  <h4>To add a new post:</h4>
                  <ol>
                    <li>Add a new object to the <code>blogPosts</code> array</li>
                    <li>Include title, date, phase, tags, excerpt, and content</li>
                    <li>Update the flow phases progress as needed</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ASIC;
