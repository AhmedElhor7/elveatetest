import React from 'react'

export default function Loading() {
  return (
    <div class="flex items-center justify-center min-h-screen">
      <div
        class="animate-spin w-16 h-16 border-[6px] border-blue-600 border-t-transparent rounded-full"
        role="status"
        aria-label="loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
