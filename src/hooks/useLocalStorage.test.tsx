import { renderHook } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';
import { use } from 'react';

test('initializes with default value', () => {
    const { result } = renderHook(() => useLocalStorage<Todo[]>('todo', []))
    expect(result.current[0]).toEqual([]);
});