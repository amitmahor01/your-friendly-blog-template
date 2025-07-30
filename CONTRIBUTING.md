# Contributing to Your Friendly Blog Template 🤝

Thank you for your interest in contributing to this project! We welcome contributions from the community and appreciate your help in making this blog template even better.

## 🚀 How to Contribute

### 1. **Fork the Repository**
- Click the "Fork" button on the top right of this repository
- This creates a copy of the repository in your GitHub account

### 2. **Clone Your Fork**
```bash
git clone https://github.com/yourusername/your-friendly-blog-template.git
cd your-friendly-blog-template
```

### 3. **Set Up Development Environment**
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. **Create a Feature Branch**
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 5. **Make Your Changes**
- Write your code following the project's coding standards
- Add tests if applicable
- Update documentation as needed

### 6. **Test Your Changes**
```bash
# Run the development server
npm run dev

# Check for linting errors
npm run lint

# Build the project
npm run build
```

### 7. **Commit Your Changes**
```bash
git add .
git commit -m "feat: add new feature description"
```

### 8. **Push to Your Fork**
```bash
git push origin feature/your-feature-name
```

### 9. **Create a Pull Request**
- Go to your fork on GitHub
- Click "New Pull Request"
- Select the main branch as the base
- Write a clear description of your changes
- Submit the PR

## 📋 Pull Request Guidelines

### **Title Format**
Use conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

### **Description Template**
```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have tested this change locally
- [ ] I have added tests for this change
- [ ] This change doesn't require testing

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

## 🎨 Code Style Guidelines

### **JavaScript/JSX**
- Use 2 spaces for indentation
- Use semicolons at the end of statements
- Use single quotes for strings
- Use camelCase for variables and functions
- Use PascalCase for components
- Use meaningful variable and function names

### **Component Structure**
```jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function ComponentName({ prop1, prop2 }) {
  return (
    <div>
      {/* Component content */}
    </div>
  );
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};

ComponentName.defaultProps = {
  prop2: 0
};
```

### **File Naming**
- Use PascalCase for component files: `BlogCard.jsx`
- Use camelCase for utility files: `blogData.js`
- Use kebab-case for CSS files: `blog-card.css`

## 🐛 Reporting Bugs

### **Before Submitting a Bug Report**
1. Check if the bug has already been reported
2. Try to reproduce the bug with the latest version
3. Check if the bug is related to your environment

### **Bug Report Template**
```markdown
## Bug Description
Clear and concise description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- OS: [e.g. Windows 10, macOS, Linux]
- Browser: [e.g. Chrome, Firefox, Safari]
- Version: [e.g. 22]
- Node.js version: [e.g. 18.0.0]

## Additional Context
Add any other context about the problem here.
```

## 💡 Suggesting Features

### **Feature Request Template**
```markdown
## Feature Description
Clear and concise description of the feature you'd like to see.

## Problem Statement
Describe the problem this feature would solve.

## Proposed Solution
Describe how you envision this feature working.

## Alternative Solutions
Describe any alternative solutions you've considered.

## Additional Context
Add any other context or screenshots about the feature request.
```

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 📞 Getting Help

If you need help with contributing:

- 📧 Email: hello@your-friendly-blog.com
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/your-friendly-blog-template/discussions)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/your-friendly-blog-template/issues)

## 🙏 Recognition

Contributors will be recognized in:
- The project's README file
- Release notes
- GitHub contributors page

Thank you for contributing to make this project better! 🎉 