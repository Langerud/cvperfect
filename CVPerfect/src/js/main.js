// Basic interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Mode toggle functionality
    const resumeMode = document.getElementById('resume-mode');
    const cvMode = document.getElementById('cv-mode');
    
    if (resumeMode && cvMode) {
        resumeMode.addEventListener('click', function() {
            resumeMode.classList.add('bg-blue-600', 'text-white');
            resumeMode.classList.remove('text-gray-600');
            cvMode.classList.remove('bg-blue-600', 'text-white');
            cvMode.classList.add('text-gray-600');
        });
        
        cvMode.addEventListener('click', function() {
            cvMode.classList.add('bg-blue-600', 'text-white');
            cvMode.classList.remove('text-gray-600');
            resumeMode.classList.remove('bg-blue-600', 'text-white');
            resumeMode.classList.add('text-gray-600');
        });
    }
    
    // Resume editor text selection
    const resumeEditor = document.getElementById('resume-editor');
    const aiSuggestion = document.getElementById('ai-suggestion');
    
    if (resumeEditor && aiSuggestion) {
        resumeEditor.addEventListener('mouseup', function() {
            const selectedText = window.getSelection().toString();
            if (selectedText.length > 0) {
                aiSuggestion.classList.remove('hidden');
            } else {
                aiSuggestion.classList.add('hidden');
            }
        });
    }
});