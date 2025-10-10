import { renderHook } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';
import { use, act } from 'react';
import type { Todo } from '../types';

//Step 12: Test Initializing useLocalStorage with Default Value
test('P5S12: initializes with default value', () => {
    const { result } = renderHook(() => useLocalStorage<Todo[]>('todo', []))
    expect(result.current[0]).toEqual([]);
});

//Step 13: Test Loading Existing Data from localStorage
test('P5S13: loads existing data from localStorage', () => {
    window.localStorage.setItem('todos', JSON.stringify([{ id: '1' }]));
    const { result } = renderHook(() => useLocalStorage<Todo[]>('todos', []))
    expect(result.current[0]).toEqual([{ id: '1' }]);
});

test('P5S14: saves updates to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage<Todo[]>('todos', []));
    act(() => {
        result.current[1]([{ id: '2' }]);
    });
    expect(window.localStorage.getItem('todos')).toBe(JSON.stringify([{ id: '2' }]));
});

test('P5S15: handles invalid data in localStorage', () => {
    window.localStorage.setItem('todos', 'invalid json');
    const { result } = renderHook(() => useLocalStorage<Todo[]>('todos', []));
    expect(result.current[0]).toEqual([]);
})